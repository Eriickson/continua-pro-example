import {
  GetServerSidePropsResult,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { Session } from "next-iron-session";

type NextIronRequest = NextApiRequest & { session: Session };

export type GetServerSidePropsContext = {
  req: NextIronRequest;
  res: NextApiResponse;
};

export type GetServerSideProps<T> = (
  ctx: GetServerSidePropsContext
) => Promise<GetServerSidePropsResult<T>>;
