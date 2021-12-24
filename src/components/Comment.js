import React, { useState } from "react";
import { Button, Col, Container, FormControl, Row } from "react-bootstrap";

export default function Comment() {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState({});

  var getComment = () => {
    setCommentList([{ content: comment, time: Date.now() }, ...commentList]);
  };

  var showCommentList = commentList.map((data, index) => (
    <Row key={index}>
      <div className="box shadow-sm m-2 p-3">
        <Col>
          <div className="displayComment p-1">{data.content}</div>
        </Col>
        <Col>
          <div
            className="displayTime p-1"
            style={{ fontSize: "0.7em", color: "grey" }}
          >
            {data.time}
          </div>
        </Col>
      </div>
    </Row>
  ));
  return (
    <div>
      <Container>
        <h1>Comment</h1>
        <hr></hr>
        <Row>
          <Col lg={6} md={6}>
            <FormControl
              type="text"
              value={comment.content}
              onInput={(e) => {
                setComment(e.target.value);
              }}
            ></FormControl>
          </Col>
          <Col lg={6} md={6}>
            <Button onClick={getComment}>คอมเม้นต์</Button>
          </Col>
        </Row>
        {showCommentList.length !== 0 ? (
          showCommentList
        ) : (
          <Row>
            <div className="box shadow-sm m-2 p-3">
              <Col>
                <div className="displayComment p-1">There's not Comment.</div>
              </Col>
            </div>
          </Row>
        )}
      </Container>
    </div>
  );
}
