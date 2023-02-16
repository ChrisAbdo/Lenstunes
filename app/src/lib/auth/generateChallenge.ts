import { fetcher } from "@/app/src/graphql/auth-fetcher";
import {
  ChallengeQuery,
  ChallengeQueryVariables,
  ChallengeDocument,
} from "@/app/src/graphql/generated";

export default async function generateChallenge(address: string) {
  return await fetcher<ChallengeQuery, ChallengeQueryVariables>(
    ChallengeDocument,
    {
      request: {
        address,
      },
    }
  )();
}
