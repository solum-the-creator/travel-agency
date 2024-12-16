import { gql } from '@apollo/client';

import { query } from '@/services/apollo-client/apollo-client';

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

export default async function Test() {
  const { data } = await query({ query: LIST_COUNTRIES });

  console.log(data.countries);

  return (
    <>
      <div>Test</div>
      <div></div>
    </>
  );
}
