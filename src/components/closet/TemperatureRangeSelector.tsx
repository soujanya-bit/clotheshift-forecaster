import { Input } from '@/components/ui/input';

interface TemperatureRangeSelectorProps {
  tempRange: { min: number; max: number };
  onTempRangeChange: (range: { min: number; max: number }) => void;
}

const TemperatureRangeSelector = ({ tempRange, onTempRangeChange }: TemperatureRangeSelectorProps) => {
  return (
    <div className="flex items-center gap-2">
      <Input
        type="number"
        placeholder="Min °C"
        value={tempRange.min}
        onChange={(e) => onTempRangeChange({ ...tempRange, min: Number(e.target.value) })}
        className="w-24"
      />
      <span>to</span>
      <Input
        type="number"
        placeholder="Max °C"
        value={tempRange.max}
        onChange={(e) => onTempRangeChange({ ...tempRange, max: Number(e.target.value) })}
        className="w-24"
      />
    </div>
  );
};

export default TemperatureRangeSelector;