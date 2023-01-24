import {app} from "./app"
import { UserControler } from "./controller/userControler"

const userControler = new UserControler()

app.get("/", async function(){
   console.log("endpoint teste")
})

app.post("/createuser", userControler.createUser)

app.get("/all", userControler.getAllUsers)

app.delete("/:id", userControler.deleteUser)