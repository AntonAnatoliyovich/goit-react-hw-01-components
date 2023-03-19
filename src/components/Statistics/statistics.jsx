import {Section, Title, StatList, StatItem, StatSpan} from '../Statistics/statistics.styled'

export const Statistics =({ stats, title }) => {
    return (
        <Section>
            {title && (
                <Title>{title}</Title>
            )}

            <StatList>
                {stats.map((statistic) => (
                    <StatItem key={statistic.id}>
                        <StatSpan>{statistic.label}</StatSpan>
                        <StatSpan>{statistic.percentage}%</StatSpan>
                    </StatItem>
                ))}
            </StatList>
        </Section>
    );
};
