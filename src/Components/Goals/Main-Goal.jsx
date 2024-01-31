import Goal1 from "./goal1";

function MainGoal (){
const maingoal = <h2>This are my 2 main goals from this book</h2>

    return(
        <>
        {maingoal}
        <ul>
        <Goal1 title="Learn and Understand React Components" content="Undersatanding coding structure"/>
        </ul>
        <ul>
        <Goal1 title="Build Products" content="Success as a result of putting in the work"/>
        </ul>
        </>

    );

}

export default MainGoal;