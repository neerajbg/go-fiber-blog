import { Col, Container, Row } from "react-bootstrap";

import axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [apiData, setApiData] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_ROOT;
        const response = await axios.get(apiUrl);

        if (response.status === 200) {
          if (response?.data.statusText === "Ok") {
            setApiData(response?.data?.blog_records);
          }
        }
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
    return () => {};
  }, []);

  console.log(apiData);
  return (
    <Container>
      <Row>
        <Col xs="12" className="py-2">
          <h1 className="text-center ">
            React Application with Go fiber Backend
          </h1>
        </Col>

        {apiData &&
          apiData.map((record, index) => (
            <Col xs="4" className="py-5 box">
              <div className="title">{record.title}</div>
              <div>{record.post}</div>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default App;
