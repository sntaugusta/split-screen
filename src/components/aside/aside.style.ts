import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  left: 32px;
  top: 32px;
  border-radius: 8px;
  box-shadow: -8px 0 24px 8px #000;
  background-color: #fff2;
  color: #ffe;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
`;

export const Subtitle = styled.h2`
  font-size: 12px;
  padding: 4px 8px;
  background-color: #fff;
  color: #000;
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  border-radius: 16px;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  margin-top: 16px;
  text-align: center;
`;

export const File = styled.div`
  margin-top: 8px;
  width: 100%;
  border-radius: 12px;
  padding: 16px;
  position: relative;
  border: 3px dotted #fffe;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff3;
    border-radius: 12px;
    z-index: 1;
  }
  input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    z-index: 2;
  }
`;

export const Filename = styled.span`
  font-size: 24px;
`;

export const FileIcon = styled.svg`
  fill: none;
  width: 64px;
  height: 64px;
  path {
    stroke: #fff;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const CategoryName = styled.h3`
  border-right: 1px solid #fff3;
  margin-right: 24px;
  padding: 16px 24px 16px 0;
`;

export const CategoryLabel = styled.label`
  font-weight: 100;
  display: block;
  text-align: right;
`;

export const CategoryInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CategoryInput = styled.input`
  font-size: 20px;
  padding: 8px;
  width: 100px;
  margin-right: 4px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  color: #333;
`;

export const Tools = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding-top: 16px;
  display: flex;
  gap: 16px;
`;

export const ToolsIcon = styled.a`
  width: 48px;
  height: 48px;
  background-color: #fff3;
  border-radius: 32px;
  text-align: center;
  line-height: 48px;
  font-size: 32px;
  position: relative;
  &:after {
    content: attr(data-title);
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    font-size: 14px;
    padding: 4px;
    border-radius: 4px;
    background-color: #fff;
    line-height: normal;
    white-space: nowrap;
    display: none;
  }
  &:hover {
    background-color: #fff;
    color: #006;
    &:after {
      display: block;
    }
  }
`;
