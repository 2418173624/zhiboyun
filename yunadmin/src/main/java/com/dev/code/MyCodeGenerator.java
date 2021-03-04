package com.dev.code;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.core.exceptions.MybatisPlusException;
import com.baomidou.mybatisplus.core.toolkit.StringPool;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.InjectionConfig;
import com.baomidou.mybatisplus.generator.config.*;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class MyCodeGenerator {
    public static final String SERVICE_PATH_DEFAULT = "service";
    public static final String SERVICE_IMPL_PATH_DEFAULT = "service.impl";
    public static final String CONTROLLER_PATH_DEFAULT = "controller";
    public static final String ENTITY_PATH_DEFAULT = "domain.po";
    public static final String DAO_PATH_DEFAULT = "dao";

    public static void main(String[] args) {
        AutoGenerator mpg = new AutoGenerator();
        String m = scanner("模块");
        if(StringUtils.isBlank(m)){
            m = "";
        }
        // 全局配置
        GlobalConfig gc = new GlobalConfig();
        final String projectPath = System.getProperty("user.dir");
        gc.setOutputDir(projectPath+"/yunadmin/src/main/java");
        gc.setAuthor("qch");
        gc.setOpen(false);
        gc.setFileOverride(true); //是否覆盖
        gc.setEntityName("%sPO");
        gc.setMapperName("I%sMapper");
        gc.setIdType(IdType.ASSIGN_UUID);
        // gc.setSwagger2(true); 实体属性 Swagger2 注解
        mpg.setGlobalConfig(gc);

        // 数据源配置
        DataSourceConfig dsc = new DataSourceConfig();
        dsc.setUrl("jdbc:mysql://localhost:3306/yunzhibo?useSSL=false&useUnicode=true&characterEncoding=utf-8");
        //dsc.setSchemaName("PUBLIC");
        dsc.setDriverName("com.mysql.jdbc.Driver");
        dsc.setUsername("root");
        dsc.setPassword("123456");
        mpg.setDataSource(dsc);

        //包配置
        PackageConfig pc = new PackageConfig();
        //pc.setParent("com.tjsinfo.localframework.biz.".concat("module"));
        pc.setParent("com.dev");
        pc.setModuleName(m);

        String s = scanner("service");
        String service = StringUtils.isNotBlank(s) ? s : SERVICE_PATH_DEFAULT;
        pc.setService(service);

        s = scanner("service.impl");
        String impl = StringUtils.isNotBlank(s) ? s : SERVICE_IMPL_PATH_DEFAULT;
        pc.setServiceImpl(impl);

        s = scanner("controller");
        String controller = StringUtils.isNotBlank(s) ? s : CONTROLLER_PATH_DEFAULT;
        pc.setController(controller);

        s = scanner("entity");
        String entity = StringUtils.isNotBlank(s) ? s : ENTITY_PATH_DEFAULT;
        pc.setEntity(entity);

        s = scanner("dao");
        String dao = StringUtils.isNotBlank(s) ? s : DAO_PATH_DEFAULT;
        pc.setMapper(dao);

        mpg.setPackageInfo(pc);

        // 自定义配置
        InjectionConfig cfg = new InjectionConfig() {
            @Override
            public void initMap() {
                // to do nothing
            }
        };
        // 如果模板引擎是 freemarker
        //String templatePath = "/templates/mapper.xml.ftl";
        // 如果模板引擎是 velocity
        String templatePath = "/templates/mapper.xml.vm";

        // 自定义输出配置
        List<FileOutConfig> focList = new ArrayList<FileOutConfig>();
        // 自定义配置会被优先输出

        final String MODEL = m;
        focList.add(new FileOutConfig(templatePath) {
            @Override
            public String outputFile(com.baomidou.mybatisplus.generator.config.po.TableInfo tableInfo) {
                // 自定义输出文件名 ， 如果你 Entity 设置了前后缀、此处注意 xml 的名称会跟着发生变化！！
                //return projectPath.concat("/src/main/resources/mapper/").concat(MODEL).concat("/").concat(tableInfo.getMapperName()).concat(StringPool.DOT_XML);
                return projectPath+ "/yunadmin/src/main/resources/mapper/"+pc.getModuleName()+"/"+tableInfo.getEntityName()+"Mapper"+ StringPool.DOT_XML;
            }
        });

        cfg.setFileOutConfigList(focList);
        mpg.setCfg(cfg);

        // 配置模板
        TemplateConfig templateConfig = new TemplateConfig();

        // 配置自定义输出模板
        //指定自定义模板路径，注意不要带上.ftl/.vm, 会根据使用的模板引擎自动识别
        // templateConfig.setEntity("templates/entity2.java");
        // templateConfig.setService();
        // templateConfig.setController();

        templateConfig.setXml(null);
        mpg.setTemplate(templateConfig);


        // 策略配置
        StrategyConfig strategy = new StrategyConfig();
        strategy.setTablePrefix("_", "t_");
        strategy.setNaming(NamingStrategy.underline_to_camel);
        strategy.setColumnNaming(NamingStrategy.underline_to_camel);
        strategy.setEntityLombokModel(true);
        strategy.setRestControllerStyle(true);
        strategy.setInclude(scanner("tableName").split(","));
        strategy.setControllerMappingHyphenStyle(true);
        strategy.setEntityTableFieldAnnotationEnable(true);
        mpg.setStrategy(strategy);
        //mpg.setTemplateEngine(new FreemarkerTemplateEngine());
        mpg.execute();

    }

    public static String scanner(String flag) {
        String result = null;
        if ("tableName".equals(flag)) {
            result = inputTableName();
        } else {
            result = inputOther(flag);
        }
        return result;
    }

    private static String inputTableName() {
        Scanner scan = new Scanner(System.in);
        System.out.println("请输入表名，多个表名以英文逗号分割");
        String tableNames = scan.nextLine();
        if (StringUtils.isNotBlank(tableNames)) {

            return tableNames;
        }
        throw new MybatisPlusException("表名不能为空");
    }

    private static String inputOther(String title) {
        Scanner scan = new Scanner(System.in);
        System.out.println("请输入" + title + "路径");
        String result = scan.nextLine();
        return result;
    }
}
