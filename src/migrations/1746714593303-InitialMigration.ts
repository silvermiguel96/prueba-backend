import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1746714593303 implements MigrationInterface {
    name = 'InitialMigration1746714593303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "producto" ("id" character varying NOT NULL, "nombre" character varying NOT NULL, "descripcion" character varying NOT NULL, "precio" numeric NOT NULL, "stock" integer NOT NULL, "creado_en" TIMESTAMP NOT NULL DEFAULT now(), "actualizado_en" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5be023b11909fe103e24c740c7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "producto"`);
    }

}
