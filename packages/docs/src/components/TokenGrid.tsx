import "../styles/token-grid.css"

interface TokenGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  reflectValue?: boolean
}

export function TokenGrid({
  tokens,
  hasRemValue = false,
  reflectValue = false
}: TokenGridProps) {
  return (
    <table className="token-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td
              style={{
                fontSize: reflectValue ? value : "1rem",
                height: reflectValue ? value : "1rem"
              }}
            >
              ${key}
            </td>
            <td>{value}</td>
            {hasRemValue && <td>{Number(value.replace("rem", "")) * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
