type Item = {
    title: string;
    value: string;
};

export default function MainTitleList({ items }: { items: Item[] }) {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full font-inter">
            {items.map(({ title, value }, i) => (
                <li key={i} className="flex flex-col w-full">
                    {/* Заголовок */}
                    <span className="text-[#C3C6CC] text-[16px] pb-[8px] border-b border-[#C3C6CC] mb-[16px]">
            {title}
          </span>

                    {/* Значение */}
                    {/* Добавлен класс whitespace-pre-line, который учитывает \n */}
                    <span className="text-[#404040] text-[20px] sm:text-[22px] lg:text-[30px] font-medium uppercase leading-tight whitespace-pre-line">
            {value}
          </span>
                </li>
            ))}
        </ul>
    );
}