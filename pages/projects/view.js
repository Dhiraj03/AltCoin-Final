import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../routes";
import Project from "../../ethereum/project";
import RequestRow from "../../components/RequestRow";

class MilestoneIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    
    const project = Project(address);
    const donorCount = await project.methods.getMilestoneCount().call();
    const milestones = await Promise.all(
      Array(parseInt(donorCount))
        .fill()
        .map((element, index) => {
          return project.methods.milestones(index).call();
        })
    );
    return { address, milestones };
  }

  renderRows() {
    return this.props.milestones.map((milestone, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          milestone={milestone}
          address={this.props.address}
        />
      );
    })
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h3>Milestones</h3>
        
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Complete</HeaderCell>
            </Row>
          </Header>
           <Body>{this.renderRows()}</Body> 
        </Table>
      </Layout>
    );
  }
}

export default MilestoneIndex;