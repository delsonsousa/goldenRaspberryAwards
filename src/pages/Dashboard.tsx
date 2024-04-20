import React, { useEffect, useState } from "react";
import { Content } from "../components/Content/styled";
import { Table } from "../components/Table/styled";
import { Box } from "../components/Box/styled";
import { getProducers, getStudios, getWinner, getYears } from "../service/api";
import Search from "../components/Search";
import { MaskEvent, MaskEventDetail } from "@react-input/mask";

interface Year {
  year: number;
  winnerCount: number;
}
interface Studios {
  name: string;
  winCount: number;
}
interface Winner {
  id: number;
  year: number;
  title: string;
}
interface Producer {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
}
interface Producers {
  max: Producer[];
  min: Producer[];
}

function topThreeStudios(arr: Studios[]) {
  const ordered = arr.sort((a: Studios, b: Studios): any => {
    return a.winCount < b.winCount;
  });

  return ordered.slice(0, 3);
}

export default function () {
  const [search, setSearch] = useState<MaskEventDetail | null>(null);
  const [years, setYears] = useState<Year[]>([]);
  const [studios, setStudios] = useState<Studios[]>([]);
  const [producers, setProducers] = useState<Producers>({ max: [], min: [] });
  const [winner, setWinner] = useState<Winner[]>([]);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const resWinner = await getWinner(search?.value);
    setWinner(resWinner.data);
  }

  function handleMask(event: MaskEvent) {
    setSearch(event.detail);
  }

  useEffect(() => {
    (async () => {
      const resYears = await getYears();
      setYears(resYears.data.years);

      const resStudios = await getStudios();
      const topThree = topThreeStudios(resStudios.data.studios);
      setStudios(topThree);

      const resProducers = await getProducers();
      setProducers(resProducers.data);
    })();
  }, []);

  return (
    <Content>
      <Box>
        <h3>List years with multiple winners</h3>
        <Table>
          <tbody>
            <tr>
              <th>Year</th>
              <th>Win count</th>
            </tr>
            {years.map((item: Year, index: number) => {
              return (
                <tr key={index}>
                  <td>{item.year}</td>
                  <td>{item.winnerCount}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Box>
      <Box>
        <h3>Top 3 studios with winners</h3>
        <Table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Win count</th>
            </tr>
            {studios.map((item: Studios, index: number) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.winCount}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Box>
      <Box>
        <h3>Producers with longest and shortest interval between wins</h3>
        <h4>Maximum</h4>
        <Table>
          <tbody>
            <tr>
              <th>Producer</th>
              <th>Interval</th>
              <th>Previous Year</th>
              <th>Following Year</th>
            </tr>

            {producers.max.map((p) => {
              return (
                <tr key={p.producer}>
                  <td>{p.producer}</td>
                  <td>{p.interval}</td>
                  <td>{p.previousWin}</td>
                  <td>{p.followingWin}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <h4>Minimum</h4>
        <Table>
          <tbody>
            <tr>
              <th>Producer</th>
              <th>Interval</th>
              <th>Previous Year</th>
              <th>Following Year</th>
            </tr>

            {producers.min.map((p) => {
              return (
                <tr key={p.producer}>
                  <td>{p.producer}</td>
                  <td>{p.interval}</td>
                  <td>{p.previousWin}</td>
                  <td>{p.followingWin}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Box>
      <Box>
        <h3>List movies winners by year</h3>
        <form onSubmit={handleSubmit}>
          <Search onMask={handleMask} />
        </form>
        <Table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Year</th>
              <th>Title</th>
            </tr>

            {winner.map((w) => {
              return (
                <tr key={`${w.id}-${w.title}`}>
                  <td>{w.id}</td>
                  <td>{w.year}</td>
                  <td>{w.title}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Box>
    </Content>
  );
}
