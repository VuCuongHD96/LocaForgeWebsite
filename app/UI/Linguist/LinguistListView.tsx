import { Linguist } from "../../Domain/Linguist/Linguist";

export function LinguistListView({
  linguistList,
}: {
  linguistList: Linguist[];
}) {
  return (
    <div>
      <h1>Linguist List</h1>
      <ul>
        {linguistList.map((linguist) => (
          <li key={linguist.id}>{linguist.name}</li>
        ))}
      </ul>
    </div>
  );
}
