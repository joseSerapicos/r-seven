<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180225155041 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE packageBookingService ADD fk_place INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\', ADD fk_placeTo INT UNSIGNED DEFAULT NULL COMMENT \'Column row identifier\'');
        $this->addSql('ALTER TABLE packageBookingService ADD CONSTRAINT FK_C078BF45B5F070B8 FOREIGN KEY (fk_place) REFERENCES place (id) ON DELETE RESTRICT');
        $this->addSql('ALTER TABLE packageBookingService ADD CONSTRAINT FK_C078BF453E1A161A FOREIGN KEY (fk_placeTo) REFERENCES place (id) ON DELETE RESTRICT');
        $this->addSql('CREATE INDEX IDX_C078BF45B5F070B8 ON packageBookingService (fk_place)');
        $this->addSql('CREATE INDEX IDX_C078BF453E1A161A ON packageBookingService (fk_placeTo)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE packageBookingService DROP FOREIGN KEY FK_C078BF45B5F070B8');
        $this->addSql('ALTER TABLE packageBookingService DROP FOREIGN KEY FK_C078BF453E1A161A');
        $this->addSql('DROP INDEX IDX_C078BF45B5F070B8 ON packageBookingService');
        $this->addSql('DROP INDEX IDX_C078BF453E1A161A ON packageBookingService');
        $this->addSql('ALTER TABLE packageBookingService DROP fk_place, DROP fk_placeTo');
    }
}
