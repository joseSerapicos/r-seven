<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20170301020801 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE booking CHANGE totalMargin totalMargin NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total margin\', CHANGE totalMarkup totalMarkup NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total markup\'');
        $this->addSql('ALTER TABLE bookingService CHANGE totalMargin totalMargin NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total margin\', CHANGE totalMarkup totalMarkup NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total markup\'');
        $this->addSql('ALTER TABLE bookingServicePrice CHANGE totalMargin totalMargin NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total margin\', CHANGE totalMarkup totalMarkup NUMERIC(10, 2) DEFAULT \'0\' NOT NULL COMMENT \'Total markup\'');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE booking CHANGE totalMargin totalMargin NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total margin\', CHANGE totalMarkup totalMarkup NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total markup\'');
        $this->addSql('ALTER TABLE bookingService CHANGE totalMargin totalMargin NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total margin\', CHANGE totalMarkup totalMarkup NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total markup\'');
        $this->addSql('ALTER TABLE bookingServicePrice CHANGE totalMargin totalMargin NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total margin\', CHANGE totalMarkup totalMarkup NUMERIC(10, 4) DEFAULT \'0.0000\' NOT NULL COMMENT \'Total markup\'');
    }
}
