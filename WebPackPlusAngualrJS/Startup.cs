using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebPackPlusAngualrJS.Startup))]
namespace WebPackPlusAngualrJS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
