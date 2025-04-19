type NumberProps = {
  nomor: number;
};

function Number({ nomor }: NumberProps) {
  return (
    <div className="bg-accent-light rounded-4xl w-8 h-8 flex items-center justify-center">
      <p className="text-light font-bold text-xs">{nomor}</p>
    </div>
  );
}

export default Number;
