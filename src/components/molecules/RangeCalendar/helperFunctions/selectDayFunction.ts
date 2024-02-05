import { TDay } from '@/components/molecules/MonthWithDays/utils/types/TDay.model';
import { IDateOnlyArray } from '../IDateArray.model';
type DateArray = Date[] | (Date | undefined)[];

const checkForValidDatesEnterd = (dates: DateArray) => {
  return dates[0] && dates[1] ? true : false;
};

const checkDateIsSame = (dates: Date[]) => {
  // Check if date is the same
  return dates[0].getTime() === dates[1].getTime();
};

interface ISelectDayFunction {
  day: TDay;
  monthIndex: number;
  selectedYear: number;
  selectedDates: IDateOnlyArray;
  selectFromTo: 'from' | 'to' | undefined;
  handleSwitchFromTo: ((change: 'from' | 'to') => void) | undefined;
}

const selectDayFunction = (props: ISelectDayFunction) => {
  const { day, monthIndex, selectedYear, selectedDates, selectFromTo, handleSwitchFromTo } = props;

  // create day with the selected date
  const newDate = new Date(selectedYear, monthIndex, day.number);
  let newSelectedDates: DateArray = [...selectedDates];

  if (newSelectedDates[0] && newDate < newSelectedDates[0]) {
    newSelectedDates[0] = newDate; // Swap dates if "to" date is earlier than "from" date
  }

  // When no dates are selected or when "from" date is selected
  if (selectFromTo === 'from' || selectFromTo === undefined) {
    newSelectedDates = [newDate, selectedDates[1]];

    if (newSelectedDates[1] && newDate > newSelectedDates[1]) {
      newSelectedDates[1] = undefined; // Swap dates if "from" date is later than "to" date
      handleSwitchFromTo && handleSwitchFromTo('to');
    }

    handleSwitchFromTo && handleSwitchFromTo('to');
  } else if (selectFromTo === 'to') {
    newSelectedDates = [selectedDates[0], newDate];
  }

  // Check if the clicked date is the same as the first and last selected dates
  if (
    selectedDates[0] &&
    selectedDates[1] &&
    newDate.getTime() === selectedDates[0].getTime() &&
    newDate.getTime() === selectedDates[1].getTime()
  ) {
    // Reset the selection to start a new range from the clicked date
    newSelectedDates = [newDate, undefined];
    handleSwitchFromTo && handleSwitchFromTo('to');
  } else if (checkForValidDatesEnterd(newSelectedDates)) {
    if (checkDateIsSame(newSelectedDates as Date[])) {
      const identifySecondAsDate = newSelectedDates[1] as Date;
      identifySecondAsDate.setDate(identifySecondAsDate.getDate() + 1);
      newSelectedDates = [newSelectedDates[0], identifySecondAsDate];
    }
    // else if when selection 1 is after selection 2 then set selection 2 to undefined
    else if (newSelectedDates[0]!.getTime() > newSelectedDates[1]!.getTime()) {
      newSelectedDates[0] = newDate;
      newSelectedDates[1] = undefined;
    }
  }
  return newSelectedDates as IDateOnlyArray;
};

export default selectDayFunction;
