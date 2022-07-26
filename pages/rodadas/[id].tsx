import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import content from "../../dados/2003.json";

function Rodada() {
  const router = useRouter();

  const id = router.query;

  const rodada = content[0]["partidas"];

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Data</Th>
            <Th>Estádio</Th>
            <Th>Hora</Th>
            <Th>Mandante</Th>
            <Th>Placar</Th>
            <Th>Visitante</Th>
            <Th>Placar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {content[0]["partidas"].map((p) => (
            <Tr key={p.mandante}>
              <Td>{p.data_partida}</Td>
              <Td>{p.estadio}</Td>
              <Td>{p.hora_partida}</Td>
              <Td>{p.mandante}</Td>
              <Td>{p.placar_mandante}</Td>
              <Td>{p.visitante}</Td>
              <Td>{p.placar_visitante}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default Rodada;
