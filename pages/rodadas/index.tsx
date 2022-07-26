import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import Link from "next/link";

import content from "../../dados/2003.json";

function ListaDeAnos() {

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>Rodada</Th>
          </Tr>
        </Thead>
        <Tbody>
          {content.map((r) => (
            <Tr key={r.numero}>
              <Td>{r.numero}</Td>
              <Td>
                <Link passHref href={`/rodadas/${r.numero}`}>
                  ver
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default ListaDeAnos;
