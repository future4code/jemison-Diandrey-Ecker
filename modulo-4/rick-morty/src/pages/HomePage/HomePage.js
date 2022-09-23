import { Header } from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { HomePageContainer } from "./style";

export function HomePage(props) {
    const { results } = props

    const renderList = results.map(char => {
        return (
            <Card
                img={char.image}
                name={char.name}
                species={char.species}
            />
        )
    })

    return (
        <HomePageContainer>
            <Header />
            <main>
                { renderList }
            </main>
        </HomePageContainer>
    )
}