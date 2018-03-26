using System.Collections.Generic;
using System.Data;
using Microsoft.Extensions.Options;
using MySql.Data.MySqlClient;

namespace MultiCoinCalc
{
    public class DbConnector
    {
        private readonly IOptions<MySqlOptions> MySqlConfig;

        public DbConnector(IOptions<MySqlOptions> config)
        {
            MySqlConfig = config;
        }
        internal IDbConnection Connection
        {
            get
            {
                return new MySqlConnection(MySqlConfig.Value.ConnectionString);
            }
        }

        // //This method runs a query and stores the response in a list of dictionary records
        // public List<Dictionary<string, object>> Query(string queryString)
        // {
        //     using (IDbConnection dbConnection = Connection)
        //     {
        //         using (IDbCommand command = dbConnection.CreateCommand())
        //         {
        //             command.CommandText = queryString;
        //             dbConnection.Open();
        //             var result = new List<Dictionary<string, object>>();
        //             using (IDataReader rdr = command.ExecuteReader())
        //             {
        //                 while (rdr.Read())
        //                 {
        //                     var dict = new Dictionary<string, object>();
        //                     for (int i = 0; i < rdr.FieldCount; i++)
        //                     {
        //                         dict.Add(rdr.GetName(i), rdr.GetValue(i));
        //                     }
        //                     result.Add(dict);
        //                 }
        //             }
        //             return result;
        //         }
        //     }
        // }
        // //This method run a query and returns no values
        // public void Execute(string queryString)
        // {
        //     using (IDbConnection dbConnection = Connection)
        //     {
        //         using (IDbCommand command = dbConnection.CreateCommand())
        //         {
        //             command.CommandText = queryString;
        //             dbConnection.Open();
        //             command.ExecuteNonQuery();
        //         }
        //     }
        // }
    }
}
