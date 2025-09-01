import styled from "styled-components";

export const DashboardLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #2c2b3e;
`;

export const Sidebar = styled.div`
  width: 240px;
  background-color: #1a182b;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    font-size: 1.3rem;
    color: #6c63ff;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const SidebarLink = styled.button`
  background: none;
  border: none;
  color: #c7c7c7;
  text-align: left;
  font-size: 1rem;
  padding: 10px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  &:hover {
    background: #383757;
    color: #ffffff;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 30px;
  overflow-y: auto;
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 1.8rem;
    color: #ffffff;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background-color: #383757;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-6px);
  }
  h3 {
    font-size: 1.2rem;
    color: #6c63ff;
    margin-bottom: 10px;
  }
  p {
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
  }
`;

export const TableWrapper = styled.div`
  background-color: #383757;
  border-radius: 15px;
  padding: 20px;
  overflow-x: auto;
  table {
    width: 100%;
    border-collapse: collapse;
    color: #c7c7c7;
  }
  th,
  td {
    padding: 12px;
    text-align: left;
  }
  th {
    color: #6c63ff;
    font-weight: 600;
    border-bottom: 1px solid #444;
  }
  tr:hover {
    background-color: #2c2b3e;
  }
`;
