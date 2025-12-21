'use client';

import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { Container, Content, Row } from "@/app/styles";
import useCalculator from "@/app/hooks/useCalculator";

export default function Home() {
    const {
        currentNumber,
        handleAddNumber,
        handleClear,
        handleBackspace,
        handleSumNumbers,
        handleMinusNumbers,
        handleMultiplyNumbers,
        handleDivideNumbers,
        handleEquals
    } = useCalculator();

  return (
      <Container>
          <Content>
              <Input value={currentNumber} />
              <Row>
                  <Button label={"C"}  onClick={handleClear}/>
                  <Button label={"CE"}  onClick={handleBackspace}/>
                  <Button label={"*"}  onClick={handleMultiplyNumbers}/>
                  <Button label={"/"}  onClick={handleDivideNumbers}/>
              </Row>
              <Row>
                  <Button label={"7"}  onClick={() => handleAddNumber('7')}/>
                  <Button label={"8"}  onClick={() => handleAddNumber('8')}/>
                  <Button label={"9"}  onClick={() => handleAddNumber('9')}/>
                  <Button label={"-"}  onClick={handleMinusNumbers}/>
              </Row>
              <Row>
                  <Button label={"4"}  onClick={() => handleAddNumber('4')}/>
                  <Button label={"5"}  onClick={() => handleAddNumber('5')}/>
                  <Button label={"6"}  onClick={() => handleAddNumber('6')}/>
                  <Button label={"+"}  onClick={handleSumNumbers}/>
              </Row>
              <Row>
                  <Button label={"1"}  onClick={() => handleAddNumber('1')}/>
                  <Button label={"2"}  onClick={() => handleAddNumber('2')}/>
                  <Button label={"3"}  onClick={() => handleAddNumber('3')}/>
                  <Button label={"="}  onClick={handleEquals}/>
              </Row>
              <Row>
                  <Button label={"0"} onClick={() => handleAddNumber('0')}/>
              </Row>
          </Content>
      </Container>
  );
}