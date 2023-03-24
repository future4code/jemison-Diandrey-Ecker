import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUsersOrdenations } from "./endpoints/getAllUsersOrdenations";
import { getUserName } from "./endpoints/getUserName";
import { getUserPage } from "./endpoints/getUserPage";
import { getUsersTypes } from "./endpoints/getUsersTypes";


app.get("/users", getAllUsers)
app.get("/user/page", getUserPage)
app.get("/user/name", getUserName)
app.get("/user/ordenation", getUsersOrdenations)
app.get("/user/:type/type", getUsersTypes)