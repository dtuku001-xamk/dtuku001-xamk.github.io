import { useState, useEffect } from "react"
import { Button, Card } from "react-bootstrap"

type StratItemProps = {
    name: string
    price: string
    phase: string
    category: string
    effectTime: string
    targetOwn: string
    targetEnemy: string
    textShort: string
    textLong: string
}

export function StratItem({name, price, phase, category, effectTime, targetOwn, targetEnemy, textShort, textLong}: StratItemProps) {

    const [showLongText, setShowLongText] = useState(false);

    const [style, setStyle] = useState({
        backgroundColor: "#9c9d97", 
        height: "300px",
        color: "#636268"
    })
    
    const handleMouseEnter = () => {
        setShowLongText(true);
        setStyle({ ...style, height: "auto"})
    };
    
    const handleMouseLeave = () => {
        setShowLongText(false);
        setStyle({ ...style, height: "300px"})
    };

    const handleMouseClick = () => {
        if (showLongText === false) {
            setShowLongText(true)
            setStyle({ ...style, height: "auto"})
        } else if (showLongText === true) {
            setShowLongText(false)
            setStyle({ ...style, height: "300px"})
        }
    }

    useEffect(() => {
        const colorPicker = () => {
            if (phase === "Before Battle") {
                setStyle({ ...style, backgroundColor: "#9c9d97", color: "#46454c"})
            } else if ( phase === "Deployment") {
                setStyle({ ...style, backgroundColor: "#455b55", color: "#baa4aa"})
            } else if ( phase === "Any") {
                setStyle({ ...style, backgroundColor: "#455b55", color: "#baa4aa"})
            } else if ( phase === "Command" || phase === "Enemy Command") {
                setStyle({ ...style, backgroundColor: "#5b6c3e", color: "#a493c1"})
            } else if ( phase === "Movement" || phase === "Enemy Movement") {
                setStyle({ ...style, backgroundColor: "#526238", color: "#ad9dc7"})
            } else if ( phase === "Psychic" || phase === "Enemy Psychic") {
                setStyle({ ...style, backgroundColor: "#414d2c", color: "#beb2d3"})
            } else if ( phase === "Shooting" || phase === "Shooting / Fight" || phase === "Enemy Shooting") {
                setStyle({ ...style, backgroundColor: "#384326", color: "#c7bcd9"})
            } else if ( phase === "Charge" || phase === "Enemy Charge") {
                setStyle({ ...style, backgroundColor: "#2b331d", color: "#d4cce2"})
            } else if ( phase === "Fight") {
                setStyle({ ...style, backgroundColor: "#1e2414", color: "#e1dbeb"})
            } else if ( phase === "Morale" || phase === "Enemy Morale") {
                setStyle({ ...style, backgroundColor: "#11140b", color: "#eeebf4"})
            }
        };
        colorPicker();
    }, [phase]);

    {/* onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} */}
    return <Card onClick={handleMouseClick} style={style}>
        <Card.Header className="">
        <small className="">Phase: {phase}</small>
        <small className="text-muted ms-3">{category}</small>
        <Card.Title className="fs-2">{name}</Card.Title>
        <Card.Subtitle className="mb-2">{price}</Card.Subtitle>
      </Card.Header>
      <Card.Body className="d-flex justify-content-start align-items-center">
        <div className="">
            {showLongText ? <Card.Text>{textLong}</Card.Text> : <Card.Text>{textShort}</Card.Text>}
        </div>
        {/*
        <div className="mt-auto">
            {shortOrLong === false ? <Button variant="dark" className="w-100">Expand</Button> : <Button variant="secondary" className="w-100">Simplify</Button>}
        </div> */}

      </Card.Body>
      <Card.Footer>
        <small className="">Until: {effectTime}</small>
        <br />
        <small className="">Target: {targetOwn} / {targetEnemy}</small>
      </Card.Footer>
    </Card>
}