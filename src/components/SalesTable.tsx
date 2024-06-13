interface SalesTableProps {
  className?: string;
}

function SalesTable({ className }: SalesTableProps) {
  return <div className={`bg-white shadow-lg p-6 ${className}`}>Table Goes Here</div>;
}

export default SalesTable;