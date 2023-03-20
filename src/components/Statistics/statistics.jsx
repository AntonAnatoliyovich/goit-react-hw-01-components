import { Section, Title, StatList, StatItem, StatSpan } from '../Statistics/statistics.styled';
import getRandomHexColor from './randomColor';
import PropTypes from "prop-types";

export const Statistics = ({ stats, title }) => {
    return (
        <Section>
            {title && (
                <Title>{title}</Title>
            )}

            <StatList>
                {stats.map((statistic) => (
                    <StatItem key={statistic.id} className='statistic-elem' style={{backgroundColor: getRandomHexColor()}}>
                        <StatSpan>{statistic.label}</StatSpan>
                        <StatSpan>{statistic.percentage}%</StatSpan>
                    </StatItem>
                ))}
            </StatList>
        </Section>
    );
};

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
};
