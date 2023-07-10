import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'
import { useEffect, useState } from "react";

interface IRepository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){
    const [repositories, setRepository] = useState<IRepository[]>([]);

    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos")
        .then(response => response.json())
        .then(data => setRepository(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    );
}