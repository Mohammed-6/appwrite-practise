import { Account, Client } from "appwrite";

const Index = async () => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66a8acfd002df85df386");

  const account = new Account(client);

  const result = await account.get();

  console.log(result);
  return <></>;
};

export default Index;
