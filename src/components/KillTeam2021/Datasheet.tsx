import React from 'react';
import { Badge } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { Model } from './types';
import { StatsTable } from './StatsTable'
import { ModelTitle } from './ModelTitle'

type Props = {
  model: Model
};

export function Datasheet(props: Props) {
  return (
    <Row className={props.model.selected > 0 ? "included" : "excluded"}>
      <Col>
        <ModelTitle model={props.model} />
        <StatsTable {...props.model.stats} />
      </Col>
      <Col sm='auto'>
        <div>
          <Badge pill variant="primary" className="mb-2" style={{
            textTransform: "uppercase",
            marginRight: "10px",
            display: "block",
          }}>
            {props.model.faction}
          </Badge>
          {props.model.keywords.map((keyword: string) => (
            <Badge pill variant="secondary" className="mb-2" style={{
              textTransform: "uppercase",
              marginRight: "10px",
              display: "block",
            }}>
              {keyword}
            </Badge>
          ))}
        </div>
      </Col>
    </Row>
  );
}
