import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";
import { SummaryCard, SummaryContainter } from "./styles";
export function Summary() {
  return (
    <SummaryContainter>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <ArrowCircleUp size={32} color="#fff" />
        </header>
        <strong>17.400,00</strong>
      </SummaryCard>
    </SummaryContainter>
  );
}
