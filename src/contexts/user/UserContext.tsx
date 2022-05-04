import React, { createContext, Context, useState, FC, useContext } from "react";
import arraySort from "array-sort";
import { useToast } from "@chakra-ui/react";

import { useUI } from "../ui/UIContext";
import { useClient, useHandlerTryCatch } from "src/hooks";

export interface Role {
  id: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  user_type: string;
}

type PermissionAction = "create" | "read" | "edit" | "delete";

type AccessScopesType =
  | "Users"
  | "AccountSettings"
  | "Roles"
  | "Contacts"
  | "ContactSegments"
  | "Customers"
  | "CustomerTypes";

const accessScopesTranslation: Record<AccessScopesType, string> = {
  AccountSettings: "Configuraciones de la cuenta",
  Contacts: "Contactos",
  ContactSegments: "Segmentos de contacto",
  Customers: "Vendedores",
  CustomerTypes: "Tipos de clientes",
  Roles: "Roles",
  Users: "Usuarios",
};
interface AccessScope {
  id: number;
  description: string | null;
  resource: AccessScopesType;
  action: PermissionAction;
  granted: boolean;
}

interface AccessScopes {
  id: number;
  name: string;
  permissions: Permission[];
}

interface Permission {
  accessScope: string;
  translation: string;
  values: AccessScope[];
}

type AccessScopeType = Record<AccessScopesType, AccessScope[]>;

export interface CreateUserArgs {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
  role: { value: number; label: string };
}

interface IUserContext {
  roles: Role[];
  users: User[];
  accessScope: AccessScopes | undefined;
  createUser(newUser: CreateUserArgs): Promise<boolean>;
  updateUser(userId: number, data: CreateUserArgs): Promise<boolean>;
  signin(email: string, password: string): Promise<void>;
  getRoles(): Promise<void>;
  getPermissions(roleId: number): Promise<void>;
  setUsers(users: User[]): void;
  deleteUser(userId: number): Promise<void>;
}

const UserContext = createContext<IUserContext | null>(
  null
) as Context<IUserContext>;

const UserProvider: FC = ({ children }) => {
  const { setLoadingScreen } = useUI();
  const { handlerError } = useHandlerTryCatch();
  const { client } = useClient();
  const toast = useToast();
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [accessScope, setAccessScope] = useState<AccessScopes | undefined>(
    undefined
  );

  async function signin(email: string, password: string) {
    console.log({ email, password });
  }

  async function getRoles() {
    try {
      const { data } = await client.get("/roles");
      setRoles(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getPermissions(roleId: number) {
    try {
      const { data } = await client.get(`/roles/${roleId}`);

      const { name, id, access_scopes } = data.data as {
        id: number;
        name: string;
        access_scopes: AccessScopeType[];
      };

      const permissions: Permission[] = access_scopes.map((access_scope) => {
        return Object.keys(access_scope).map((key) => ({
          accessScope: key,
          translation: accessScopesTranslation[key as AccessScopesType],
          values: arraySort(access_scope[key as AccessScopesType], "id"),
        }))[0];
      });

      setAccessScope({ id, name, permissions });
    } catch (err) {
      console.log(err);
    }
  }

  async function getUsers() {
    try {
      const { data } = await client.get("/users");
      setUsers(data.data);
    } catch (err) {}
  }

  async function createUser(newUser: CreateUserArgs) {
    setLoadingScreen({ isLoading: true, label: "Creando Usuario..." });
    const { email, name, password, passwordConfirmation, role } = newUser;
    try {
      const { data, status } = await client.post("/users", {
        user: {
          email,
          name,
          password,
          password_confirmation: passwordConfirmation,
          role_id: role.value,
        },
      });

      if (status === 201) {
        setUsers((prev) => [...prev, data.data]);
        setLoadingScreen({ isLoading: false });
        toast({
          title: "Usuario creado",
          description: "Se ha creado el usuario de forma exitosa.",
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: "left-accent",
          position: "top-right",
        });
        return true;
      }
    } catch (err) {
      console.log(err);
      setLoadingScreen({ isLoading: false });
      return false;
    }
    return false;
  }

  async function updateUser(userId: number, newData: CreateUserArgs) {
    try {
      const { data, status } = await client.put(`/users/${userId}`, {
        user: newData,
      });
      if (status === 200) {
        setUsers((prev) =>
          prev.filter((user) => (user.id === userId ? data.data : user))
        );
        return true;
      }
    } catch (err) {
      console.log(err);
    }
    return true;
  }

  async function deleteUser(userId: number) {
    setLoadingScreen({ isLoading: true, label: "Eliminando Usuario..." });
    try {
      const { status } = await client.delete(`/users/${userId}`);
      if (status === 200) {
        const newUsers = users.filter(({ id }) => id !== userId);
        setUsers(newUsers);
        setLoadingScreen({ isLoading: false });
        toast({
          title: "Usuario Eliminado",
          description: "Se ha eliminado el usuario de forma exitosa.",
          status: "success",
          duration: 3000,
          isClosable: true,
          variant: "left-accent",
          position: "top-right",
        });
        return;
      }
    } catch (err) {
      handlerError(err);
    }
  }

  return (
    <UserContext.Provider
      value={{
        roles,
        users,
        accessScope,
        signin,
        getRoles,
        getPermissions,
        setUsers,
        createUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
