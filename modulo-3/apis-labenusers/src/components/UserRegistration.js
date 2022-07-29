import axios from "axios";
import react, { useState, useEffect, useInsertionEffect } from "react";

function Registration () {

    const [users, setUsers] = useState([]);
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const allUsers = users.map((user, index) => {
        return (
            <RegUsers key={index}>
                <IconeUser src=""/>
                {user.name}
            </RegUsers>
        )
    })

useEffect(() => {
    getAllUsers()
}, [])

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const serviceHeaders = {
    headers: {
        Autorization: "diandrey-ecker-jemison"
    }
}

const getAllUsers = () => {
    axios.get(url, serviceHeaders)
    .then((response) => { setUsers(response.data.result.list) })
    .catch((error) => { console.log(error.response) })
}

const body = {
    "name": input
}
const postUser = (e) => {
    e.preventDefault();

    axios.post(url, body, serviceHeaders)
    .then((response) => {
        alert("Usuario cadastrado com sucesso!")
        getAllUsers()
    }).catch((error) => {
        alert("Tente novamente.")
    })

    setInput("")
}

const deleteUser = (e) => {
    e.preventDefault();

    const delUser = users.filter((user) => user.name === input)

    axios.delete(url + "/" + delUser[0].id, serviceHeaders)
    .then((response) => {
        alert("Playlist deletada com sucesso!")
        getAllPlaylists();
    }).catch((error) => {
        alert("Algo dey errado, tente novamente!")
    })
    
    setInput("")
}

}