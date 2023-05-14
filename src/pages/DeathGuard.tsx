import { Col, Row } from "react-bootstrap"
import { StratItem } from "../components/StratItem"
import DGstrats from "../data/deathguard.json"

export function DeathGuard() {

  type PhasesOrder = {
      [key: string]: number
      
    }

  const phaseOrder: PhasesOrder = {
      "Before battle": 1,
      "Deployment": 2,
      "Any": 3,
      "Command": 4,
      "Enemy Command": 5,
      "Movement": 6,
      "Enemy Movement": 7,
      "Psychic": 8,
      "Enemy Psychic": 9,
      "Shooting": 10,
      "Enemy Shooting": 11,
      "Shooting / Fight": 12,
      "Charge": 13,
      "Enemy Charge": 14,
      "Fight": 15,
      "Morale": 16,
      "Enemy Morale": 17
  };
  
  const sortedDGstrats = DGstrats.sort((a, b) => {
      const aPhase = phaseOrder[a.phase];
      const bPhase = phaseOrder[b.phase];
      return aPhase - bPhase;
  });

  const groupedStrats = sortedDGstrats.reduce((acc, curr) => {
    const { phase } = curr;
    if (!acc[phase]) {
      acc[phase] = [];
    }
    acc[phase].push(curr);
    return acc;
  }, {} as { [key: string]: typeof sortedDGstrats });

  return (
    <>
      <h1>Death Guard</h1>
      {Object.keys(groupedStrats).map((phase) => (
        <div key={phase}>
          <h2>{phase}</h2>
          <Row md={2} xs={1} lg={3} className="g-3">
            {groupedStrats[phase].map((item) => (
              <Col key={item.name}>
                <StratItem {...item} />
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
  }