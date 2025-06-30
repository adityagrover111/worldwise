import styles from "./CountryItem.module.css";

function CountryItem({ country, flagemojiToPNG }) {
  return (
    <li className={styles.countryItem}>
      <span className={styles.emoji}>{flagemojiToPNG(country.emoji)}</span>

      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
