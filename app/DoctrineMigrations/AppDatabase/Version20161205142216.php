<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20161205142216 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE UNIQUE INDEX UNIQ_4A0A72E55E237E06 ON app_icon (name)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_4A0A72E5659429DB ON app_icon (icon)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_4A0A72E5BF396750 ON app_icon (id)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX UNIQ_4A0A72E55E237E06 ON wo_app.app_icon');
        $this->addSql('DROP INDEX UNIQ_4A0A72E5659429DB ON wo_app.app_icon');
        $this->addSql('DROP INDEX UNIQ_4A0A72E5BF396750 ON wo_app.app_icon');
    }
}
