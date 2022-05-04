import { useHandleResponse } from "@/hooks";
import { useAction } from "@/store";
import { Menu, IconButton, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Campaign } from "@continuapro/entity";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { MoreVertical } from "react-feather";

interface MenuOptionsProps {
  campaign: Campaign;
}

export const MenuOptions: FC<MenuOptionsProps> = ({ campaign }) => {
  const { push } = useRouter();

  const { deleteCampaign } = useAction();

  const handleResponse = useHandleResponse();

  async function handleDelete() {
    const response = await deleteCampaign({ campaignType: "mailing", id: campaign.id, status: campaign.status });

    handleResponse(response);
  }

  return (
    <div>
      <Menu>
        <MenuButton
          size="sm"
          _focus={{}}
          textDecor="underline"
          colorScheme="gray"
          variant="ghost"
          aria-label=""
          color="gray.500"
          as={IconButton}
          icon={<MoreVertical size="1.25rem" />}
        />
        <MenuList>
          <MenuItem onClick={() => push(`/campaigns/mailing/${campaign.id}/settings-view`)}>Editar</MenuItem>
          <MenuItem onClick={handleDelete}>Eliminar</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
