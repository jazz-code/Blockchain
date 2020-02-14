import React, { useState, useEffect } from 'react';
import {Header, Rating, Table} from 'semantic-ui-react'
import axios from 'axios';
import SearchBar from "./search"

const Wallet = () => {
    const [chain, setChain] = useState([])
    const [id, setId] = useState({user: "Anthony R",
                                  amount: 0  })
    const [currentBalance, setCurrentBalance] = useState(0)

    useEffect(() => {
        axios.get("http://0.0.0.0:5000/chain")
        .then(res => {
            console.log("response", res.data.chain)
            setChain(res.data.chain)
            res.data.chain.forEach(element => {
                element.transactions.forEach(item => {
                  if (item.recipient === id.user) {
                    setId(item.recipient)
                    id.amount += 1

                    // console.log("total",total)
                    // console.log("id", id)
                    // console.log("amount: ",item.amount)
                    // setCurrentBalance(total)
                }
            })
            console.log("currentBalance****", id.amount)
            });
        })
        .catch(err => {
            console.log(err)
        })
      }, []);
    //   console.log("currentBalance****", id === true ? id.amount: null)

    return (
        <div>
        <Table celled padded>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell singleLine>User Id</Table.HeaderCell>
                <Table.HeaderCell>Balance</Table.HeaderCell>
                <Table.HeaderCell>Efficacy</Table.HeaderCell>
                <Table.HeaderCell>Consensus</Table.HeaderCell>
                <Table.HeaderCell>Comments</Table.HeaderCell>
            </Table.Row>
            </Table.Header>

            <Table.Body>
            <Table.Row>
                <Table.Cell>
                <Header as='h2' textAlign='center'>
                    {console.log("chain",chain)}
                    {id.user ? id.user : null}
                    Anthony R
                </Header>}
                </Table.Cell>
                <Table.Cell singleLine>Power Output</Table.Cell>
                <Table.Cell>
                <Rating icon='star' defaultRating={3} maxRating={3} />
                </Table.Cell>
                <Table.Cell textAlign='right'>
                80% <br />
                <a href='#'>18 studies</a>
                </Table.Cell>
                <Table.Cell>
                Creatine supplementation is the reference compound for increasing
                muscular creatine levels; there is variability in this increase,
                however, with some nonresponders.
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                {/* <Table.Cell>
                <Header as='h2' textAlign='center'>
                    A
                </Header>
                </Table.Cell> */}
                {/* <Table.Cell singleLine>Weight</Table.Cell>
                <Table.Cell>
                <Rating icon='star' defaultRating={3} maxRating={3} />
                </Table.Cell>
                <Table.Cell textAlign='right'>
                100% <br />
                <a href='#'>65 studies</a>
                </Table.Cell>
                <Table.Cell>
                Creatine is the reference compound for power improvement, with numbers
                from one meta-analysis to assess potency
                </Table.Cell> */}
            </Table.Row>
            </Table.Body>
        </Table>
        {/* <SearchBar /> */}
        </div>
    )    
  }

export default Wallet;