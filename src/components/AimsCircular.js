import React from 'react';
import { Container} from 'reactstrap';

import '../assets/styles/aims.scss';

export default class Aims extends React.Component{
    render(){
        return(
            <Container>
                <ul className="circle-container">
                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                    <li>Praesentium, laudantium maxime reiciendis</li>
                    <li>officiis repellat perferendis non<br/>voluptatibus aspernatur provident</li>
                    <li>Vel, facilis optio beatae<br/>impedit magnam nesciunt</li>
                    <li>consectetur autem quae?</li>
                    <li>Lorem ipsum dolor sit amet, consectetur</li>
                    <li>Fugiat, quam, molestiae, accusamus</li>
                    <li>repellat blanditiis aliquam voluptatem<br />amet atque reiciendis</li>
                </ul>
            </Container>
        );
    }
}
