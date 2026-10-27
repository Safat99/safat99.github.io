import type { RelatedOutput } from "../../../model/siteModel";
import "./related-outputs.css";

export default function RelatedOutputsView({ outputs }: { outputs?: RelatedOutput[] }) {
  if (!outputs?.length) return null;
  return <div className="related-outputs">
    <p className="related-output-label">Related Output</p>
    <ul>{outputs.map(output => <li key={output.label}>
      {output.targetId ? <a href={`#${output.targetId}`}>{output.label}</a> : output.url ? (
        <a href={output.url} target="_blank" rel="noopener noreferrer" aria-label={`${output.label} (opens in a new tab)`}>{output.label}</a>
      ) : <span>{output.label}</span>}
      {output.targetId && output.url && <> · <a href={output.url} target="_blank" rel="noopener noreferrer" aria-label={`Open DOI: ${output.label} (opens in a new tab)`}>DOI ↗</a></>}
    </li>)}</ul>
  </div>;
}
