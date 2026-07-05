import { useState } from "react";
import EpisodeCard from "./EpisodeCard";
import styles from "./SeasonNavigation.module.css";

/**
 * SeasonNavigation Component
 *
 * Lets the user switch between a show's seasons via a compact, expandable
 * dropdown ("Current Season ▾") instead of scrolling through every season's
 * episodes at once. Selecting a season from the dropdown updates the season
 * summary card and its list of episodes below.
 *
 * @component
 * @param {Object} props
 * @param {Array<{id:number|string, title:string, image:string, episodes:Array}>} props.seasons
 *   The full array of season objects embedded in the show data.
 * @returns {JSX.Element}
 */
export default function SeasonNavigation({ seasons = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const activeSeason = seasons[selectedIndex];

  /**
   * Selects a season by its index in the seasons array and closes the dropdown.
   * @param {number} index
   */
  const handleSelect = (index) => {
    setSelectedIndex(index);
    setIsOpen(false);
  };

  if (!seasons.length) {
    return <p className={styles.noSeasons}>No seasons available for this show yet.</p>;
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>Current Season</h2>

        <div className={styles.dropdown}>
          <button
            type="button"
            className={styles.dropdownTrigger}
            onClick={() => setIsOpen((open) => !open)}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            Season {selectedIndex + 1}
            <span className={styles.chevron}>{isOpen ? "▲" : "▼"}</span>
          </button>

          {isOpen && (
            <ul className={styles.dropdownList} role="listbox">
              {seasons.map((season, index) => (
                <li key={season.id ?? index}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={index === selectedIndex}
                    className={`${styles.dropdownOption} ${
                      index === selectedIndex ? styles.dropdownOptionActive : ""
                    }`}
                    onClick={() => handleSelect(index)}
                  >
                    Season {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {activeSeason && (
        <div className={styles.seasonCard}>
          <div className={styles.seasonSummary}>
            <img
              src={activeSeason.image}
              alt={`Cover art for ${activeSeason.title}`}
              className={styles.seasonImage}
            />
            <div>
              <h3 className={styles.seasonTitle}>
                Season {selectedIndex + 1}: {activeSeason.title}
              </h3>
              <p className={styles.episodeCount}>
                {activeSeason.episodes?.length ?? 0} Episodes
              </p>
            </div>
          </div>

          <ul className={styles.episodeList}>
            {(activeSeason.episodes ?? []).map((episode, index) => (
              <EpisodeCard
                key={episode.episode ?? index}
                episode={episode}
                seasonImage={activeSeason.image}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
