import { User } from "@/lib/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const getData = async (): Promise<User[]> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    await new Promise((resolve) => setTimeout(resolve, 50));
    return res.json();
  } catch (error) {
    console.error(error);
  }
  return [];
};
export default async function Home() {
  const users = await getData();

  return (
    <main className=" grid grid-cols-3 gap-8">
      {users.map((user) => {
        return (
          <Card key={user.id}>
            <CardHeader>
              <Avatar>
                <AvatarFallback>fallback</AvatarFallback>
                <AvatarImage
                  src="https://cdn.pixabay.com/photo/2021/01/17/09/11/woman-5924366_960_720.jpg"
                  alt="free image"
                />
              </Avatar>
              <div>
                <CardTitle>{user.name}</CardTitle>
              </div>
              <div>
                <CardDescription>username: {user.username}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>Company: {user.company.name}</p>
              <p>Catch phrase: {user.company.catchPhrase}</p>
              <p>Company bs: {user.company.bs}</p>
            </CardContent>
            <CardFooter>
              <p>
                Address: {user.address.city} {user.address.street}{" "}
                {user.address.zipcode}
              </p>
            </CardFooter>
          </Card>
        );
      })}
    </main>
  );
}
