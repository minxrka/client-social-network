import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Card, CardBody } from "@nextui-org/react"
import { User } from "../../components/user"
import { selectCurrent } from "../../features/user/userSlice"

export const Following = () => {
  const currentUser = useSelector(selectCurrent)

  if (!currentUser) {
    return null // return null if the user is not logged in yet. This prevents potential bugs or crashes.
  }
  return currentUser.following.length > 0 ? (
    <div className="gap-5 flex flex-col">
      {currentUser.following.map(user => (
        <Link to={`/users/${user.following.id}`} key={user.following.id}>
          <Card>
            <CardBody className="block">
              <User
                name={user.following.name ?? ""}
                avatarUrl={user.following.avatarUrl ?? ""}
                description={user.following.email ?? ""}
              />
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  ) : (
    <h1>У вас нет подписчиков</h1>
  )
}
