class Github{
    constructor(clientId, clientSecret){
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.repos_count = 7;
        this.repos_sort = "created asc";
    }
    async fetchUser(user){
        const userDataRequest  = await fetch(`http://api.github.com/users/${user}?client_id=${this.clientId}&clientSecret=${this.clientSecret}` );
        const repositoriesRequest = await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.clientId}&clientSecret=${this.clientSecret}&per_page=${this.repos_count}&sort=${this.repos_sort}`);
        const userData = await userDataRequest.json();
        const repositories = await repositoriesRequest.json();
        return {
            userData,
            repositories
        }
    }
}

module.exports = Github;