<?php

namespace Application\DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180406205220 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX UNIQ_527BA8EA47CC8C92 ON emailTemplateDefault');
        $this->addSql('ALTER TABLE emailTemplateDefault ADD context VARCHAR(16) NOT NULL COMMENT \'Context to apply template\', DROP action');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_527BA8EAE25D857E ON emailTemplateDefault (context)');
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX UNIQ_527BA8EAE25D857E ON emailTemplateDefault');
        $this->addSql('ALTER TABLE emailTemplateDefault ADD action VARCHAR(16) NOT NULL COLLATE utf8_unicode_ci COMMENT \'Action to apply template\', DROP context');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_527BA8EA47CC8C92 ON emailTemplateDefault (action)');
    }
}
