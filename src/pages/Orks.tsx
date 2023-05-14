import { Col, Row } from "react-bootstrap"
import { StratItem } from "../components/StratItem"
import OrkStrats from "../data/orks.json"

export function Orks() {
    
    return ( 
        <>
            <h1>Orks</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {OrkStrats.map(item => (
                    <Col key={item.name}>
                        <StratItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}
