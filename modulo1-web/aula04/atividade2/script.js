const usernameInput = document.getElementById("username");
const searchButton = document.getElementById("searchButton");

const profile = document.getElementById("profile");
const message = document.getElementById("message");

const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const login = document.getElementById("login");
const bio = document.getElementById("bio");

const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repositories = document.getElementById("repositories");

const githubLink = document.getElementById("githubLink");

async function searchUser() {
    const username = usernameInput.value.trim();

    if (username === "") {
        message.textContent = "Digite um nome de usuário.";
        profile.classList.add("hidden");
        return;
    }

    message.textContent = "Buscando usuário...";
    profile.classList.add("hidden");

    try {
        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
            throw new Error("Usuário não encontrado.");
        }

        const data = await response.json();

        avatar.src = data.avatar_url;
        avatar.alt = `Foto de ${data.login}`;

        name.textContent = data.name || "Nome não informado";
        login.textContent = `@${data.login}`;
        bio.textContent = data.bio || "Este usuário não possui biografia.";

        followers.textContent = data.followers;
        following.textContent = data.following;
        repositories.textContent = data.public_repos;

        githubLink.href = data.html_url;

        message.textContent = "";
        profile.classList.remove("hidden");

    } catch (error) {
        message.textContent = error.message;
        profile.classList.add("hidden");
    }
}

searchButton.addEventListener("click", searchUser);

usernameInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchUser();
    }
});