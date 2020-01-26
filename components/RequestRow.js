import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Project from "../ethereum/project";

class RequestRow extends Component {
  

  render() {
    const {Row, Cell} = Table;
    const {id, milestone} = this.props;
    return (
      <Row>
        <Cell>{id}</Cell>
        <Cell>{milestone.aim}</Cell>
        <Cell>{milestone.value}</Cell>
        <Cell>{milestone.recipient}</Cell>
        <Cell>
          {milestone.complete ? (
            <Button color="green" basic>
              Validated
            </Button>
          ) : (
            <Button color="grey" basic>
              Pending
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default RequestRow;
