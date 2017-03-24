<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170215120239 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE serviceAllot (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', name VARCHAR(64) NOT NULL COMMENT \'Name\', allot SMALLINT UNSIGNED NOT NULL COMMENT \'Allot/Allot\', startDate DATE NOT NULL COMMENT \'Start date of validation\', endDate DATE NOT NULL COMMENT \'End date of validation\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_B5E7FAA15E237E06 (name), UNIQUE INDEX UNIQ_B5E7FAA1BF396750 (id), INDEX IDX_B5E7FAA111B2A7FE (fk_service), INDEX idx_serviceAllot_date (startDate, endDate), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE serviceAllot ADD CONSTRAINT FK_B5E7FAA111B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE serviceCapacity');
        $this->addSql('ALTER TABLE entity CHANGE birthDate birthDate DATE DEFAULT NULL COMMENT \'Birth date\'');
        $this->addSql('ALTER TABLE service ADD isEnabledAllot TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Enables allot/allot management\', DROP isEnabledCapacity');
        $this->addSql('ALTER TABLE bookingPax CHANGE birthDate birthDate DATE DEFAULT NULL COMMENT \'Birth date\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE serviceCapacity (id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT \'Column row identifier\', fk_service INT UNSIGNED NOT NULL COMMENT \'Column row identifier\', name VARCHAR(64) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Name\', capacity SMALLINT UNSIGNED NOT NULL COMMENT \'Capacity/Allot\', startDate DATE NOT NULL COMMENT \'Start date of validation\', endDate DATE NOT NULL COMMENT \'End date of validation\', insertTime DATETIME NOT NULL COMMENT \'Date and time insertion\', insertUser VARCHAR(32) NOT NULL COLLATE utf8_unicode_ci COMMENT \'User insertion\', isEnabled TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Determines whether the registry is enabled\', UNIQUE INDEX UNIQ_F75260C35E237E06 (name), UNIQUE INDEX UNIQ_F75260C3BF396750 (id), INDEX IDX_F75260C311B2A7FE (fk_service), INDEX idx_serviceCapacity_date (startDate, endDate), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE serviceCapacity ADD CONSTRAINT FK_F75260C311B2A7FE FOREIGN KEY (fk_service) REFERENCES service (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE serviceAllot');
        $this->addSql('ALTER TABLE bookingPax CHANGE birthDate birthDate DATE NOT NULL COMMENT \'Birth date\'');
        $this->addSql('ALTER TABLE entity CHANGE birthDate birthDate DATE NOT NULL COMMENT \'Birth date\'');
        $this->addSql('ALTER TABLE service ADD isEnabledCapacity TINYINT(1) DEFAULT \'0\' NOT NULL COMMENT \'Enables capacity/allot management\', DROP isEnabledAllot');
    }
}
